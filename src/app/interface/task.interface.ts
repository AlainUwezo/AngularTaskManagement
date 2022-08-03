interface ITask{
    id:string,
    title:string,
    type:string,
    dueDate:Date,
    description:Date    
}

interface ITaskTypeOption{
    type:string;
}

interface ITypePercent{
    count:number,
    type: string
}

export {ITask, ITaskTypeOption, ITypePercent}