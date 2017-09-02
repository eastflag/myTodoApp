export class TodoVo {
  todo_id: number;
  isEdited: boolean;

  constructor(public isFinished?: boolean, public todo?: string,
              public created?: string, public updated?: string) {
  }
}
