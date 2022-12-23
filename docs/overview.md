### Generate Css files from Sass

The commands below start the sass compiler in watch mode.
For more visit [sass](https://sass-lang.com/)

```shell
sass ./src/assets/sass:./src/assets/css -w
```

### Icons

Icons in the `./src/assets/icons` directory, are svg code copied from the figma file and pasted into react components.

> The search icon svg code copied from the figma file was render currently.

### Fonts

In the index.css file the Poppins font was embedded using different font weights as shown below

- Poppins regular is represented as a 400 value.
- Poppins semibold is represented as a 500 value.
- Poppins bold is represented as a 600 value.

```css
p {
  font-weight: 400;
}
```

The code snippet above show an example of using the poppins regular as a font weight of 400. The same goes for other weights,
see font-face in the index.css file for reference.

### Test

To launch test runner, type the following code in a terminal.

```shell
npm test
```

Header.tsx is excluded from component test because useLocation could only be used in `<Router><Router/>` but is include in `<NavLink></NavLink>`

### Header Component

Dead links using `<a href="#">` could not be done because it is not a

> jsx-a11y/anchor-is-valid

To learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md

### UI Design

The concept of atomic design by Brad Frost was followed in designing the UI components.
