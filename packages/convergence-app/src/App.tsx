import React from "react";
import "./App.scss";
import * as Fabric from "office-ui-fabric-react";
import * as FabricExperiments from "@uifabric/experiments";
import * as Stardust from "@stardust-ui/react";
import * as FastDNA from "@microsoft/fast-components-react-msft";

interface SampleCardProps {
  title: string;
  children?: JSX.Element | JSX.Element[];
}

/** @deprecated Interfaces and types prefixed with I have been renamed to remove the prefix. Import X instead. */
export type ISampleCardProps = SampleCardProps;

const SampleCard = (props: SampleCardProps) => (
  <div className="Card">
    <Fabric.Text variant="large" style={{ fontWeight: "bold" }}>
      {props.title}
    </Fabric.Text>
    {props.children}
  </div>
);

const AllButtons = () => (
  <>
    <SampleCard title="Fabric components">
      <FabricExperiments.Button
        primary
        icon="Upload"
        content="Primary button"
      />
      <FabricExperiments.Button
        primary
        disabled
        icon="Upload"
        content="Primary button (disabled)"
      />
      <FabricExperiments.Button icon="Upload" content="Default button" />
      <div className="HorizontalStack">
        <FabricExperiments.Button circular primary icon="Upload" />
        <FabricExperiments.Button circular primary disabled icon="Upload" />
        <FabricExperiments.Button circular icon="Upload" />
      </div>

      <Fabric.Checkbox label="I am a Checkbox" checked />
      <Fabric.Checkbox label="I am a Checkbox" />
      <Fabric.ChoiceGroup
        options={[
          { key: "1", text: "Option 1", checked: true },
          { key: "2", text: "Option 2" }
        ]}
      />
      <Fabric.Slider className="stretch" min={0} max={10} showValue={false} />
      <Fabric.TextField className="stretch" placeholder="Enter text" />
      <Fabric.Spinner />
      <Fabric.ProgressIndicator className="stretch" />
    </SampleCard>

    <SampleCard title="FastDNA components">
      <FastDNA.Button
        appearance={FastDNA.ButtonAppearance.primary}
        beforeContent={() => <Fabric.Icon iconName="upload" />}
        children="Primary button"
      />
      <FastDNA.Button
        disabled
        appearance={FastDNA.ButtonAppearance.primary}
        beforeContent={() => <Fabric.Icon iconName="upload" />}
        children="Primary button (disabled)"
      />
      <FastDNA.Button>Default button</FastDNA.Button>
      <FastDNA.Button appearance={FastDNA.ButtonAppearance.outline}>
        Outline button
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
      <FastDNA.TextField className="stretch" placeholder="Enter text" />
      <FastDNA.Progress circular />
      <FastDNA.Progress />
    </SampleCard>

    <SampleCard title="Stardust components">
      <Stardust.Button primary content="Primary button" />
      <Stardust.Button primary disabled content="Primary button (disabled)" />
      <Stardust.Button content="Default button" />
      <div className="HorizontalStack">
        <Stardust.Button circular primary icon="star" />
        <Stardust.Button circular primary disabled icon="star" />
        <Stardust.Button circular icon="star" />
      </div>
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
      <Stardust.Input className="stretch" placeholder="Enter text" />
      <Stardust.Loader />
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
