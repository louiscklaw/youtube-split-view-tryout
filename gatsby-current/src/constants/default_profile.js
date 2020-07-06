const channel_settings_default = [ {
  channel_type: 'youtube',
  channel_vid: 'KGBv8oT5lwk',
  channel_title: 'title1'
},
{
  channel_type: 'youtube',
  channel_vid: '-eUtoororgQ',
  channel_title: 'title2'
},
{
  channel_type: 'youtube',
  channel_vid: '-eUtoororgQ',
  channel_title: 'title3'
},
{
  channel_type: 'youtube',
  channel_vid: '-eUtoororgQ',
  channel_title: 'title4'
},
{
  channel_type: 'youtube',
  channel_vid: '-eUtoororgQ',
  channel_title: 'title5'
},
{
  channel_type: 'youtube',
  channel_vid: '-eUtoororgQ',
  channel_title: 'title6'
},
{
  channel_type: 'youtube',
  channel_vid: '-eUtoororgQ',
  channel_title: 'title7'
}
]

const default_breakpoints = {lg: 600, sm: 0}

const default_layout_lg = [
  {i: 'view_0',  x: 0, y: 0, w: 3, h: 3},
  {i: 'view_1',  x: 3, y: 0, w: 1, h: 1},
  {i: 'view_2',  x: 3, y: 1, w: 1, h: 1}
]

const default_layout_sm = [
  {i: 'view_0', x: 0, y: 0, w: 2, h: 2},
  {i: 'view_1', x: 0, y: 2, w: 1, h: 1},
  {i: 'view_2', x: 1, y: 2, w: 1, h: 1}
]

const default_layouts = {
  lg: default_layout_lg,
  sm: default_layout_sm
}

const default_cols = {lg: 5, sm: 2}

// const default_layout_settings = {
//   lg: {
//     seating_plan: [
//       {i: 'view_0',  x: 0, y: 0, w: 3, h: 3},
//       {i: 'view_1',  x: 0, y: 3, w: 1, h: 1},
//       {i: 'view_2',  x: 1, y: 3, w: 1, h: 1},
//       {i: 'view_3',  x: 2, y: 3, w: 1, h: 1},
//       {i: 'view_4',  x: 0, y: 4, w: 1, h: 1},
//       {i: 'view_5',  x: 1, y: 4, w: 1, h: 1},
//       {i: 'view_6',  x: 2, y: 4, w: 1, h: 1},
//       {i: 'view_7',  x: 3, y: 0, w: 1, h: 1},
//       {i: 'view_8',  x: 4, y: 0, w: 1, h: 1},
//       {i: 'view_9',  x: 3, y: 1, w: 1, h: 1},
//       {i: 'view_10', x: 4, y: 1, w: 1, h: 1},
//       {i: 'view_11', x: 3, y: 2, w: 1, h: 1},
//       {i: 'view_12', x: 4, y: 2, w: 1, h: 1},
//       {i: 'view_13', x: 3, y: 3, w: 1, h: 1},
//       {i: 'view_14', x: 4, y: 3, w: 1, h: 1},
//       {i: 'view_15', x: 3, y: 4, w: 1, h: 1},
//       {i: 'view_16', x: 4, y: 4, w: 1, h: 1}
//     ],
//     cols: 5
//   },
//   sm: {
//     seating_plan: [
//       {i: 'view_0', x: 0, y: 0, w: 2, h: 2},
//       {i: 'view_1', x: 0, y: 2, w: 1, h: 1},
//       {i: 'view_2', x: 1, y: 2, w: 1, h: 1},
//       {i: 'view_3', x: 0, y: 3, w: 1, h: 1},
//       {i: 'view_4', x: 1, y: 3, w: 1, h: 1},
//       {i: 'view_5', x: 0, y: 4, w: 1, h: 1},
//       {i: 'view_6', x: 1, y: 4, w: 1, h: 1}
//     ],
//     cols: 2
//   }
// }

// default value for current_profile
const default_profile = {
  channel_setting: channel_settings_default,
  breakpoints: default_breakpoints,
  layouts: default_layouts,
  cols: default_cols
}

export {
  default_profile,
  // default_layout_settings
}