import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{
		path: "login",
		loadChildren: () =>
			import("./modules/auth/auth.module").then(
				(mod) => mod.AuthModule
			),
	},
	{
		path: "tasks",
		loadChildren: () =>
			import("./modules/tasks/tasks.module").then(
				(mod) => mod.TasksModule
			),
	},
	{
		path: "",
		redirectTo: "tasks",
		pathMatch: "full",
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
