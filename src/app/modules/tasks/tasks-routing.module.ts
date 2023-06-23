import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TasksComponent } from "./page/tasks.component";

const routes: Routes = [
	{
		path: "tasks",
		component: TasksComponent,
	},
	{
		path: "",
		redirectTo: "tasks",
		pathMatch: "full",
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TasksRoutingModule {}
