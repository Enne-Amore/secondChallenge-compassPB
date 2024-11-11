export interface Tasks {
  id: number;
  priority: string;
  title: string;
  members: string[];
  qtdComments: number;
  qtdCompletedTasks: number;
  progress: number;
  startTime: string;
  endTime: string;
  estimatedTime: string;
  creator: string;
}
