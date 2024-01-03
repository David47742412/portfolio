export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","image/database/.gitkeep","image/frameworks/.gitkeep","image/icon/github-logo.svg","image/lang/cpp.png","image/lang/csharp.webp","image/lang/java.svg","image/lang/javascript.png","image/lang/kotlin.svg","image/lang/sql.png","image/lang/typescript.png","image/profile/profile-github.png","smui.css"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".webp":"image/webp",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.0Wb7J1N-.js","app":"_app/immutable/entry/app.-fWb0pr2.js","imports":["_app/immutable/entry/start.0Wb7J1N-.js","_app/immutable/chunks/scheduler.m2oT1KzE.js","_app/immutable/chunks/singletons.ciwKXHRS.js","_app/immutable/chunks/index.0yHvoc4R.js","_app/immutable/entry/app.-fWb0pr2.js","_app/immutable/chunks/scheduler.m2oT1KzE.js","_app/immutable/chunks/index.KaB6U251.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
