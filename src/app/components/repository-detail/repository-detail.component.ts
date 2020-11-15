import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Repository } from 'src/app/models/repository/repository.model';
import { Issue } from 'src/app/models/repository/issue.model';
import { ApiService } from 'src/app/services/api.service';

export interface gitIssues {
  title: string;
  html_url: string;
}

@Component({
  selector: 'app-repository-detail',
  templateUrl: './repository-detail.component.html',
  styleUrls: ['./repository-detail.component.css']
})
export class RepositoryDetailComponent implements OnInit {

  constructor(private _Activatedroute:ActivatedRoute, 
              private apiService: ApiService,
              private _router: Router) { }

  repoName: string;
  repository: Repository;
  dataSource: Issue[] = [];
  displayedColumns: string[] = [];

  ngOnInit(): void {

    this._Activatedroute.paramMap.subscribe(
      params => { 
        this.repoName = params.get('repo');
      }
    );

    this.apiService.getRepository(this.repoName).subscribe(
      (data: Repository) => {
        this.repository = data;
      },
      (error: any) => {
        console.log(error)
      }
    )

    this.apiService.getRepository(`${this.repoName}/issues?state=open&per_page=5`).subscribe(
      (data: any) => {
        this.displayedColumns= ['login', 'avatar_url', 'title', 'html_url'];
        console.log(data)
        this.dataSource = data.map((item: any) => 
          JSON.parse(`{
                        "title": "${item.title}", 
                        "html_url": "${item.html_url}", 
                        "login": "${item.user.login}",
                        "avatar_url": "${item.user.avatar_url}"
                      }`)
        );
        console.log(this.dataSource)
      },
      (error: any) => {
        console.log(error)
      }
    )
  }
}
