import { MyTodoPage } from './app.po';

describe('my-todo App', () => {
  let page: MyTodoPage;

  beforeEach(() => {
    page = new MyTodoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
