# Changelog

All notable changes to Skypiea UI will be documented in this file.

## [Unreleased]

## [0.1.3] - 2022-04-30

### Added

- Code comments
- Multiple css properties
- as and href props for button

### Changed

- Type of style components props to StyleProps for better type guard
- splitting of css properties by ";" instead of space to allow for some css properties ex: "b-1px solid black"

## [0.1.2] - 2022-04-29

### Added

- Ability to add base style by using a string
- Ability to add hover style by using a string

### Changed

- Fixed backgroundColor not applying on hover
- Refactoring of styling of component. No longer needed to give a prop for each style param

## [0.1.1] - 2022-04-28

### Added

- Design system handling from components (provided by SkypieaCore)
- Hover styling is now handled by components
- Fallback for styling in case there is no design system
- transition, backgroundColor, color, font weight now handled for styling
- Components now have a required type prop that allows the library to fetch the styling from the design system

### Changed

- Components styling now checks for existence of a prop before trying to applying.

### Removed
