# Changelog

All notable changes to Skypiea UI will be documented in this file.

## [Unreleased]

## [0.1.1] - 2022-04-29

### Added

- Design system handling from components (provided by SkypieaCore)
- Hover styling is now handled by components
- Fallback for styling in case there is no design system
- transition, backgroundColor, color, font weight now handled for styling
- Components now have a required type prop that allows the library to fetch the styling from the design system

### Changed

- Components styling now checks for existence of a prop before trying to applying.

### Removed
