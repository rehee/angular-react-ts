export default class HomeModule {
    Title: string = 'title';
    SetTitle = (event: any) => this.Title = event.target.value;
}