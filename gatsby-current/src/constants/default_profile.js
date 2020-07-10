const channel_settings_default = {
  channel_type:['channel_type_1aaa','channel_type_2','channel_type_3'],
  channel_vid: ['channel_vid_4','channel_vid_5','channel_vid_6'],
  channel_title: ['channel_title_7','channel_title_8','channel_title_9']
}

const default_breakpoints = {lg: 600, xxs: 0}

const default_layout_lg = [
  {i: 'view_0',  x: 0, y: 0, w: 3, h: 3},
  {i: 'view_1',  x: 3, y: 0, w: 1, h: 1},
  {i: 'view_2',  x: 3, y: 1, w: 1, h: 1}
]

const default_layout_xxs = [
  {i: 'view_0', x: 0, y: 0, w: 2, h: 2},
  {i: 'view_1', x: 0, y: 2, w: 1, h: 1},
  {i: 'view_2', x: 1, y: 2, w: 1, h: 1}
]

const default_layouts = {
  lg: default_layout_lg,
  xxs: default_layout_xxs
}

const default_cols = {lg: 5, xxs: 2}

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
//   xxs: {
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