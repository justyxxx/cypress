exports['enabled experiments'] = `
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:      1.2.3                                                                            │
  │ Browser:      Electron 99 (headless)                                                           │
  │ Specs:        0 found ()                                                                       │
  │ Experiments:  experimentalFeatureA=true,experimentalFeatureB=4                                 │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
`

exports['some enabled experiments'] = `
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:      1.2.3                                                                            │
  │ Browser:      Electron 99 (headless)                                                           │
  │ Specs:        0 found ()                                                                       │
  │ Experiments:  experimentalFeatureB=4                                                           │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
`

exports['without enabled experiments'] = `
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    1.2.3                                                                              │
  │ Browser:    Electron 99 (headless)                                                             │
  │ Specs:      0 found ()                                                                         │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
`
