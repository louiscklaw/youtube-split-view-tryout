
function copyObj(source_json){
  return JSON.parse(JSON.stringify(source_json))
}

const helloProfileSupport = () => {
  console.log('mixins/profile.js','helloProfileSupport')
}

function mergeSeatingPlanByBreakpoint(profile_json_in, breakpoint_name, seating_plan_in){
  // let new_obj = copyObj(profile_json_in)
  profile_json_in.layout_settings['lg'].seating_plan = seating_plan_in
  return profile_json_in
}

export {
  helloProfileSupport,

  mergeSeatingPlanByBreakpoint
}
