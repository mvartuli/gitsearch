export class Repository {
    public name: string;
    public full_name: string;
    public description: string;
    public owner: {
        login: string;
        avatar_url: string;
        type: string;
    }
}