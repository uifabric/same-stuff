import

1. rename classNamesMap to classNames
2. write hoc
3. keep in mind recipes pattern
4. tokens

theme => literal

level of indirection
token: recipe

style classname value: token


theme = {
  components: {
    Slider: {
      tokens: {
        sliderthing: theme => literal
      }
    }
  }
}

const SliderStyles = tokens => {
  root: {
    background: tokens.sliderThing // theme => literal
  }
}


const SliderTokens = {
  sliderThing: recipeName
}

const Slider = styled(SliderBase)({
  styles: SliderStyles,
  tokens: SliderTokens
});

const styled = Component => ({ styles, tokens }) => {
  return p => {
    const theme = useTheme();
    const classNames = resolveClassNames(theme, styles, tokens);

    return <Component {...p} classNames={classNames} />;
  }
}

const SomeComp = p => <div {...p} className={p.classNames.root}/>;

import styles from 'foo.scss';

tokens: {
  checkboxSize
}

// Should margin/padding/flex be provided inline? (style={{}})
// For 1offs... yes?
// Or, define a css class and use that (className)
// But NOT tokens

// don't recalculate styles
//   don't make styles key off anythings besides theme (and possibly, tokens)
//   don't change theme often
//   don't change tokens often
//   don't inline tokens or theme
//   don't talk about mak headroom

const StyledComp = styled(SomeComp)(styles);
const StyledComp2 = p => SomeComp({...p, classNames: styles });

const resolveClassNames = (theme, styles, tokens) => {
  const classNames = lookup(theme, styles, tokens);

  if (!classNames) {
    const resolvedTokens = resolve(tokens, theme);
    const resolvedStyles = 
  }

  return classNames;
}

const resolve = (obj, ...args) = {
  const newObj = {};
  for (let name in obj) {
    newObj[name] = (typeof obj[name] ==='function') ? obj[name].apply(this, args) : obj[name];
  }
  return newObj;
}

import { exact } from "prop-types";
import { resolve } from "q";

const accentBackground = theme => theme.accent

base package:

DialogBase = composed({
  slots: {
    okButton: 'button',
    cancelButton: 'button'
  }
});

  <Dialog>
    <Dialog.Thing>
      <Button/>
    </Dialog.Thing>
  </Dialog>

composed(CommandBar, {
  slots: {
    item: CommandBarItem
  }
});


msft package: 

const SliderWithSlotOpinions = composed(SliderBase, { slots: {
  slots: {
    thumb: 'div',
    cancelButton: StyledButton
  }
}});

const RedSlider = styled(StyledSlider)({
  tokens: SliderTokens
});

1. extend html attributes
2. tokens inline

const SliderStyles: ISliderTokens = {
  root: {
    background: accentBackground,
    backgroundSelected: accent2Background,
    'complex selector': {
      ...
    } 
  }
}

theme = {
  components: {
    Slider: {
      tokens: {
        ...
      }
    }
  }
}




export Slider = styled(
  composed(SliderBase, {
  slots: {
    okButton: StyledButton,
    cancelButton: 
  }
}))();

styled(Component)({
  map: {
    background: accentBackground
  }
}, {
  token1: 'asdf',
  token2: 'asdf'
})

const (theme: Theme) => ({
  siteVariables: {
    borderRadius: theme.designSystem.borderRadius
  },
  componentVariables: {
    Alert: {
      borderRadius: pxToRem(3)
    },
    Attachment: {
      borderRadius: pxToRem(3)
    },
    Button: siteVariables => ({
      borderRadius: siteVariables.borderRadius,
      circularBorderRadius: pxToRem(999)
    }),
    ChatMessage: {
      borderRadius: pxToRem(3)
    },
    Checkbox: {
      borderRadius: pxToRem(4),
      toggleBorderRadius: pxToRem(999),
      borderRadius: pxToRem(3),
      toggleBorderRadius: pxToRem(999)
    },
    Dialog: {
      rootBorderRadius: pxToRem(3)
    },
    Dropdown: {
      containerBorderRadius: `${pxToRem(3)}`,
      openAboveContainerBorderRadius: `0 0 ${pxToRem(3)} ${pxToRem(3)}`,
      openBelowContainerBorderRadius: `${pxToRem(3)} ${pxToRem(3)} 0 0`,
      aboveListBorderRadius: `${pxToRem(3)} ${pxToRem(3)} 0 0`,
      belowListBorderRadius: `0 0 ${pxToRem(3)} ${pxToRem(3)}`
    },
    Image: {
      avatarRadius: pxToRem(9999),
      circularRadius: pxToRem(9999)
    },
    Input: {
      borderRadius: pxToRem(3),
      inputFocusBorderRadius: pxToRem(3)
    },
    Input: {
      borderRadius: `${pxToRem(3)} ${pxToRem(3)} ${pxToRem(2)} ${pxToRem(2)}`,
      inputFocusBorderRadius: `${pxToRem(3)} ${pxToRem(3)} ${pxToRem(
        2
      )} ${pxToRem(2)}`
    },
    Label: {
      circularRadius: pxToRem(9999)
    },
    PopupContent: {
      borderRadius: pxToRem(3)
    },
    ProviderBox: {
      scrollbarThumbBorderRadius: pxToRem(9)
    },
    Segment: {
      borderRadius: 0
    },
    Toolbar: {
      borderRadius: "50%",
      menuBorderRadius: pxToRem(4)
    },
    TooltipContent: {
      borderRadius: pxToRem(3)
    }
  }
};