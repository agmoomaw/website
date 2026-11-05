export const palette = {
    // Palm Leaf   #8a9a5b
    palmLeaf: '#8a9a5b',
    // Dust Grey    #dad7cd
    dustGrey: '#dad7cd',
    // Dry Sage     #a3b18a
    drySage: '#a3b18a',
    // Fern         #588157
    fern: '#588157',
    // Hunter Green #3a5a40
    hunterGreen: '#3a5a40',
    // Pine Teal    #344e41
    pineTeal: '#344e41',

    ivoryMist: '#FFF8E7',
}

export const tints = {
    // A tint is created by adding white to a base color, 
    // increasing its lightness. Tints are likely to look 
    // pastel and less intense.
    tint1: '#94A464',
    tint2: '#9CAB70',
    tint3: '#A4B27C',
    tint4: '#ADB988',
    tint5: '#B5C094',
    tint6: '#BDC7A0',
    tint7: '#C5CEAB',
    tint9: '#CED5B7',
    tint10: '#D6DCC3',
    tint11: '#DEE3CF',
    tint12: '#E6EADB',
    tint13: '#EFF1E7',
    tint14: '#F7F8F3',
    tint15: '#FFFFFF',
}

export const shades = {
    // A shade is created by adding black to a base 
    // color, increasing its darkness. Shades appear 
    // more dramatic and richer.
    shade1: '#808F54',
    shade2: '#77844E',
    shade3: '#6D7947',
    shade4: '#636E41',
    shade5: '#59633A',
    shade6: '#4F5834',
    shade7: '#454D2D',
    shade8: '#3B4227',
    shade9: '#313720',
    shade10: '#282C1A',
    shade11: '#1E2113',
    shade12: '#14160D',
    shade13: '#0A0B06',
    shade14: '#000000',
}

export const hues = {
    hue1: '#995D5A',
    hue2: '#99685A',
    hue3: '#99735A',
    hue4: '#997E5A',
    hue5: '#99885A',
    hue6: '#99935A',
    hue7: '#94995A',
    hue8: '#8A9A5B', // Palm Leaf
    hue9: '#7F995A',
    hue10: '#74995A',
    hue11: '#69995A',
    hue12: '#5E995A',
    hue13: '#5A9961',
    hue14: '#5A996C',
    hue15: '#5A9976',
}

export const colors = {
    primaryText: palette.hunterGreen,
    secondaryText: palette.fern,
    background: palette.ivoryMist,
    border: hues.hue4,
}

export const fonts = {
    regular: 'LibreFranklin_400Regular',
    medium: 'LibreFranklin_500Medium',
    semibold: 'LibreFranklin_600SemiBold',
    bold: 'LibreFranklin_700Bold',
}

export const type = {
    title: { fontFamily: fonts.bold, fontSize: 34, lineHeight: 40, color: colors.primaryText },
    body: { fontFamily: fonts.regular, fontSize: 18, lineHeight: 28, color: colors.primaryText },
    section: { fontFamily: fonts.bold, fontSize: 18, lineHeight: 24, color: colors.primaryText },
    cardTitle: { fontFamily: fonts.semibold, fontSize: 20, lineHeight: 26, color: colors.primaryText },
    cardSubtitle: { fontFamily: fonts.regular, fontSize: 17, lineHeight: 24, color: colors.primaryText },
    stat: { fontFamily: fonts.bold, fontSize: 32, lineHeight: 38, color: colors.primaryText },
    statLabel: { fontFamily: fonts.regular, fontSize: 16, color: colors.primaryText },
    button: { fontFamily: fonts.semibold, fontSize: 20, color: colors.primaryText },
    label: { fontFamily: fonts.semibold, fontSize: 17, color: colors.primaryText },
    small: { fontFamily: fonts.regular, fontSize: 15, color: colors.primaryText },
}

export const space = { xs: 6, sm: 10, md: 16, lg: 24, xl: 32 }
export const radius = { card: 20, button: 16, tile: 20, lgIcon: 200}
export const iconSize = { sm: 24, md: 36, lg: 48 }


// export const surfaces = {
//     card: {
//         backgroundColor: colors.surface,
//         borderColor: colors.border,
//         borderWidth: 1,
//         borderRadius: radius.card,
//         paddingVertical: space.lg,
//         paddingHorizontal: 20,
//     },
//     cardHighlighted: {
//         backgroundColor: colors.primarySoft,
//         borderColor: colors.primaryBorder,
//         borderWidth: 1,
//         borderRadius: radius.card,
//     },
//     button: {
//         backgroundColor: colors.primary,
//         borderRadius: radius.button,
//         paddingVertical: 18,
//         alignItems: 'center' as const,
//     },
// }