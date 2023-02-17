import '@vanilla-extract/private';
export declare const theme: {
    fonts: {
        heading: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        body: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        mono: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    fontSizing: {
        fontSize: {
            0: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            12: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            14: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            16: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            18: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            20: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            28: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            30: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            35: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            40: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            48: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            50: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            65: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            80: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            unset: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        lineHeight: {
            0: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            14: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            20: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            24: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            25: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            30: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            34: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            40: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            50: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            55: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            65: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            70: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            85: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            95: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            unset: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        fontWeight: {
            display: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            heading: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            label: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            paragraph: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
    };
    radii: {
        tiny: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        small: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        normal: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        curved: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        phat: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        round: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    size: {
        x0: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x1: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x2: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x3: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x4: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x5: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x6: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x7: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x8: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x9: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x10: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x11: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x12: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x13: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x14: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x15: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x16: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x17: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x18: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x19: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x20: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x21: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x22: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x23: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x24: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x25: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x26: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x27: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x28: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x29: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x30: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x32: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x64: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        auto: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        '100vw': `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        '100vh': `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        '100%': `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        unset: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    space: {
        x0: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x1: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x2: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x3: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x4: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x5: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x6: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x7: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x8: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x9: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x10: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x11: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x12: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x13: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x14: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x15: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x16: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x17: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x18: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x19: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x20: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x21: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x22: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x23: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x24: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x25: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x26: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x27: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x28: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x29: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x30: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x32: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x64: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        auto: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    ease: {
        in: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        out: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        inOut: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    border: {
        width: {
            none: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            thin: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            normal: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            thick: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        style: {
            solid: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            dashed: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            dotted: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
    };
    colors: {
        backdrop: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        border: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        borderOnImage: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        background1: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        background2: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        text1: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        text2: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        text3: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        text4: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        icon1: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        icon2: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        primary: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        secondary: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        tertiary: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        quaternary: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        transparent: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        accent: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        accentHover: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        accentActive: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        accentDisabled: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        onAccent: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        onAccentDisabled: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        positive: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        positiveHover: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        positiveActive: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        positiveDisabled: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        onPositive: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        onPositiveDisabled: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        warning: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        warningHover: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        warningActive: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        warningDisabled: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        onWarning: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        onWarningDisabled: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        negative: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        negativeHover: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        negativeActive: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        negativeDisabled: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        onNegative: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        onNegativeDisabled: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        ghost: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        ghostHover: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        ghostActive: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        ghostDisabled: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        onGhost: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        onGhostDisabled: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        neutral: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        neutralHover: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        neutralActive: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        neutralDisabled: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        onNeutral: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        onNeutralDisabled: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    shadows: {
        small: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        medium: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
};
export declare const lightTheme: string;
export declare const darkTheme: string;
export declare const baseTheme: string, vars: {
    color: {
        backdrop: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        border: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        borderOnImage: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        background1: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        background2: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        text1: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        text2: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        text3: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        text4: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        icon1: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        icon2: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        primary: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        secondary: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        tertiary: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        quaternary: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        transparent: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        accent: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        accentHover: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        accentActive: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        accentDisabled: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        onAccent: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        onAccentDisabled: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        positive: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        positiveHover: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        positiveActive: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        positiveDisabled: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        onPositive: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        onPositiveDisabled: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        warning: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        warningHover: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        warningActive: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        warningDisabled: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        onWarning: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        onWarningDisabled: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        negative: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        negativeHover: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        negativeActive: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        negativeDisabled: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        onNegative: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        onNegativeDisabled: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        ghost: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        ghostHover: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        ghostActive: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        ghostDisabled: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        onGhost: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        onGhostDisabled: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        neutral: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        neutralHover: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        neutralActive: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        neutralDisabled: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        onNeutral: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        onNeutralDisabled: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    fonts: {
        heading: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        body: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        mono: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    fontSize: {
        0: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        12: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        14: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        16: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        18: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        20: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        28: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        30: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        35: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        40: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        48: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        50: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        65: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        80: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        unset: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    lineHeight: {
        0: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        14: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        20: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        24: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        25: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        30: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        34: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        40: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        50: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        55: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        65: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        70: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        85: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        95: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        unset: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    fontWeight: {
        display: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        heading: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        label: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        paragraph: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    radii: {
        tiny: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        small: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        normal: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        curved: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        phat: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        round: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    shadows: {
        small: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        medium: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    size: {
        x0: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x1: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x2: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x3: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x4: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x5: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x6: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x7: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x8: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x9: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x10: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x11: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x12: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x13: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x14: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x15: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x16: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x17: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x18: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x19: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x20: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x21: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x22: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x23: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x24: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x25: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x26: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x27: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x28: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x29: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x30: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x32: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x64: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        auto: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        '100vw': `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        '100vh': `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        '100%': `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        unset: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    space: {
        x0: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x1: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x2: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x3: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x4: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x5: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x6: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x7: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x8: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x9: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x10: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x11: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x12: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x13: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x14: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x15: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x16: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x17: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x18: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x19: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x20: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x21: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x22: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x23: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x24: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x25: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x26: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x27: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x28: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x29: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x30: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x32: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        x64: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        auto: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    ease: {
        in: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        out: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        inOut: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    border: {
        width: {
            none: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            thin: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            normal: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            thick: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        style: {
            solid: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            dashed: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            dotted: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
    };
};
export declare const root: string;
//# sourceMappingURL=theme.css.d.ts.map