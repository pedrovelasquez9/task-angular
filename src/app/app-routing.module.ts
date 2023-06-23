import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{
		path: "login",
		loadChildren: () =>
			import("./modules/auth/auth-routing.module").then(
				(mod) => mod.AuthRoutingModule
			),
	},
	{
		path: "",
		loadChildren: () =>
			import("./modules/tasks/tasks-routing.module").then(
				(mod) => mod.TasksRoutingModule
			),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
