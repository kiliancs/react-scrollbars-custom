import * as React from "react";
import * as ReactDom from "react-dom";
import Scrollbar from "../../src/Scrollbar";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a ligula risus. Sed quis ex ac nisl egestas tempus. Morbi viverra orci dignissim risus condimentum iaculis. Nunc quis metus sed purus tempus interdum. Vivamus lectus neque, congue sit amet turpis at, consequat auctor odio. Maecenas nec rhoncus est. Aliquam eu urna vel sem auctor volutpat at eu enim.";

class App extends React.Component {
  public render(): React.ReactNode {
    const paragraphs: React.ReactNode[] = [];

    for (let i = 0; i < 5; i++) {
      paragraphs.push(
        <p key={i} style={{ padding: "4px 10px 4px 4px" }}>
          {text}
        </p>
      );
    }

    return (
      <Scrollbar style={{ minHeight: 200, width: 200, margin: 64 }} native>
        {paragraphs}
      </Scrollbar>
    );
  }
}

ReactDom.render(<App />, document.getElementById("AppRoot"));
