jQuery("#simulation")
  .on("click", ".s-aadf556d-7c69-45b2-95ab-b356661123bd .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-raised_Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-aadf556d-7c69-45b2-95ab-b356661123bd #s-raised_Button_2" ],
                    "attributes": {
                      "filter": " drop-shadow(-3.061616997868383E-16px 5.0px 15px #999999)"
                    }
                  },{
                    "target": [ "#s-aadf556d-7c69-45b2-95ab-b356661123bd #s-raised_Button_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#3700B3"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-aadf556d-7c69-45b2-95ab-b356661123bd #s-raised_Button_2" ],
                    "attributes": {
                      "filter": " drop-shadow(-1.2246467991473532E-16px 2.0px 5px #999999)"
                    }
                  },{
                    "target": [ "#s-aadf556d-7c69-45b2-95ab-b356661123bd #s-raised_Button_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#6200EE"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-raised_Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-aadf556d-7c69-45b2-95ab-b356661123bd #s-raised_Button_1" ],
                    "attributes": {
                      "filter": " drop-shadow(-3.061616997868383E-16px 5.0px 15px #999999)"
                    }
                  },{
                    "target": [ "#s-aadf556d-7c69-45b2-95ab-b356661123bd #s-raised_Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#3700B3"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-aadf556d-7c69-45b2-95ab-b356661123bd #s-raised_Button_1" ],
                    "attributes": {
                      "filter": " drop-shadow(-1.2246467991473532E-16px 2.0px 5px #999999)"
                    }
                  },{
                    "target": [ "#s-aadf556d-7c69-45b2-95ab-b356661123bd #s-raised_Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#6200EE"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-raised_Button_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-aadf556d-7c69-45b2-95ab-b356661123bd #s-raised_Button_5" ],
                    "attributes": {
                      "filter": " drop-shadow(-3.061616997868383E-16px 5.0px 15px #999999)"
                    }
                  },{
                    "target": [ "#s-aadf556d-7c69-45b2-95ab-b356661123bd #s-raised_Button_5 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#3700B3"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-aadf556d-7c69-45b2-95ab-b356661123bd #s-raised_Button_5" ],
                    "attributes": {
                      "filter": " drop-shadow(-1.2246467991473532E-16px 2.0px 5px #999999)"
                    }
                  },{
                    "target": [ "#s-aadf556d-7c69-45b2-95ab-b356661123bd #s-raised_Button_5 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#6200EE"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-raised_Button_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-aadf556d-7c69-45b2-95ab-b356661123bd #s-raised_Button_6" ],
                    "attributes": {
                      "filter": " drop-shadow(-3.061616997868383E-16px 5.0px 15px #999999)"
                    }
                  },{
                    "target": [ "#s-aadf556d-7c69-45b2-95ab-b356661123bd #s-raised_Button_6 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#3700B3"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-aadf556d-7c69-45b2-95ab-b356661123bd #s-raised_Button_6" ],
                    "attributes": {
                      "filter": " drop-shadow(-1.2246467991473532E-16px 2.0px 5px #999999)"
                    }
                  },{
                    "target": [ "#s-aadf556d-7c69-45b2-95ab-b356661123bd #s-raised_Button_6 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#6200EE"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-raised_Button_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-aadf556d-7c69-45b2-95ab-b356661123bd #s-raised_Button_7" ],
                    "attributes": {
                      "filter": " drop-shadow(-3.061616997868383E-16px 5.0px 15px #999999)"
                    }
                  },{
                    "target": [ "#s-aadf556d-7c69-45b2-95ab-b356661123bd #s-raised_Button_7 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#3700B3"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-aadf556d-7c69-45b2-95ab-b356661123bd #s-raised_Button_7" ],
                    "attributes": {
                      "filter": " drop-shadow(-1.2246467991473532E-16px 2.0px 5px #999999)"
                    }
                  },{
                    "target": [ "#s-aadf556d-7c69-45b2-95ab-b356661123bd #s-raised_Button_7 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#6200EE"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-raised_Button_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-aadf556d-7c69-45b2-95ab-b356661123bd #s-raised_Button_8" ],
                    "attributes": {
                      "filter": " drop-shadow(-3.061616997868383E-16px 5.0px 15px #999999)"
                    }
                  },{
                    "target": [ "#s-aadf556d-7c69-45b2-95ab-b356661123bd #s-raised_Button_8 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#3700B3"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-aadf556d-7c69-45b2-95ab-b356661123bd #s-raised_Button_8" ],
                    "attributes": {
                      "filter": " drop-shadow(-1.2246467991473532E-16px 2.0px 5px #999999)"
                    }
                  },{
                    "target": [ "#s-aadf556d-7c69-45b2-95ab-b356661123bd #s-raised_Button_8 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#6200EE"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_6" ],
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_6" ],
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/db07ace6-69cc-4716-9264-a4c1b8f89932",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/db07ace6-69cc-4716-9264-a4c1b8f89932",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_39")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/db07ace6-69cc-4716-9264-a4c1b8f89932",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });