import { Links, Meta, Outlet, Scripts } from "react-router";
import "~/app.css";

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="flex flex-col p-12 font-mono tracking-tight">
          <h1 className="font-bold">Hello world!</h1>
          <p>This is the 'underkill stack'</p>
        </div>
        <Outlet />

        <Scripts />
      </body>
    </html>
  );
}
