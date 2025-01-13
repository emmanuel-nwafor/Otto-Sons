import { Theme } from "@radix-ui/themes";
import Example from "./Example";

export default function App() {
  return (
    <html>
      <body>
        <Theme
          accentColor="crimson"
          grayColor="sand"
          radius="large"
          scaling="95%"
        >
          <Example />
        </Theme>
      </body>
    </html>
  );
}
