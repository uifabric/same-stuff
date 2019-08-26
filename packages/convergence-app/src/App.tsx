import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import * as Fabric from "office-ui-fabric-react";
import * as FabricExperiments from "@uifabric/experiments";
import * as FabricCards from "@uifabric/react-cards";
import * as Stardust from "@stardust-ui/react";
import * as FastDNA from "@microsoft/fast-components-react-msft";

interface SampleCardProps {
  title: string;
  children?: JSX.Element | JSX.Element[];
}

const SampleCardTokens = {
  padding: 10,
  minWidth: 300,
  maxWidth: 500,
  justifyContent: "start"
};

const SampleCard = (props: SampleCardProps) => (
  <FabricCards.Card root={{ verticalAlign: "start" }} tokens={SampleCardTokens}>
    <FabricCards.CardSection>
      <Fabric.Text variant="large" style={{ fontWeight: "bold" }}>
        {props.title}
      </Fabric.Text>
    </FabricCards.CardSection>
    <FabricCards.CardSection>{props.children}</FabricCards.CardSection>
  </FabricCards.Card>
);

const AllButtons = () => (
  <>
    <SampleCard title="Fabric components">
      <Fabric.PrimaryButton text="Hello, world" />
      <Fabric.DefaultButton text="Hello, world" />

      <Fabric.Checkbox label="I am a Checkbox" checked />
      <Fabric.Checkbox label="I am a Checkbox" />
      <Fabric.ChoiceGroup
        options={[
          { key: "1", text: "Option 1", checked: true },
          { key: "2", text: "Option 2" }
        ]}
      />
      <Fabric.Slider min={0} max={10} showValue={false} />
      <Fabric.TextField placeholder="Enter text" />
      <Fabric.Spinner />
      <Fabric.ProgressIndicator />
      <FabricExperiments.MicroFeedback />
    </SampleCard>

    <SampleCard title="FastDNA components">
      <FastDNA.Button appearance={FastDNA.ButtonAppearance.primary}>
        Hello, world
      </FastDNA.Button>
      <FastDNA.Button appearance={FastDNA.ButtonAppearance.outline}>
        Hello, world
      </FastDNA.Button>
      <FastDNA.Checkbox inputId={"12"} checked>
        <FastDNA.Label slot={"label"} htmlFor={"12"}>
          I am a Checkbox
        </FastDNA.Label>
      </FastDNA.Checkbox>
      <FastDNA.Checkbox inputId={"13"}>
        <FastDNA.Label slot={"label"} htmlFor={"12"}>
          I am a Checkbox
        </FastDNA.Label>
      </FastDNA.Checkbox>
      <FastDNA.Radio checked inputId={"18"}>
        <FastDNA.Label slot={"label"} htmlFor={"18"}>
          Option 1
        </FastDNA.Label>
      </FastDNA.Radio>
      <FastDNA.Radio inputId={"19"}>
        <FastDNA.Label slot={"label"} htmlFor={"19"}>
          Option 2
        </FastDNA.Label>
      </FastDNA.Radio>
      <FastDNA.Slider />
      <FastDNA.TextField placeholder="Enter text" />
      <FastDNA.Progress circular />
      <FastDNA.Progress />
    </SampleCard>

    <SampleCard title="Stardust components">
      <Stardust.Button primary content="Hello, world" />
      <Stardust.Button content="Hello, world" />
      <Stardust.Checkbox label="I am a Checkbox" checked />
      <Stardust.Checkbox label="I am a Checkbox" />
      <Stardust.RadioGroup
        vertical
        defaultCheckedValue="1"
        items={[
          { key: "1", label: "Option 1", value: "1" },
          { key: "2", label: "Option 2", value: "2" }
        ]}
      />
      <Stardust.Slider fluid />
      <Stardust.Input placeholder="Enter text" />
      <Stardust.Loader />

      <Stardust.Reaction.Group
        items={[
          { icon: "thumbs up", key: "up", content: "2K" },
          { icon: "thumbs down", key: "down", content: 10 }
        ]}
      />
    </SampleCard>
  </>
);

function App() {
  return (
    <Stardust.Provider theme={Stardust.themes.teams}>
      <div className="App">
        <AllButtons />
      </div>
    </Stardust.Provider>
  );
}

export default App;
