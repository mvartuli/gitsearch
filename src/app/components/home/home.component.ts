import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository/repository.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  title: string;
  repository: Repository;
  repositoryName: string;
  message: string;
  repositoryList: Repository[] = [];
  error: any;

  ngOnInit(): void {
    this.title = "Repositórios do GitHub!!";
  }

  addRepository() {
    this.message = '';
    this.apiService.getRepository(this.repositoryName).subscribe(
      (data: Repository) => {
        this.repository = data;
        this.repositoryList.push(this.repository);
      },
      (error: any) => {
        this.message = `Repository ${this.repositoryName} was ${error.error.message}`
      }
    );
  }

}
