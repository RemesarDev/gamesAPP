/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/**.{tsx,js,jsx,ts}", "./components/**/*.{js,jsx,ts,tsx}", "./presentation/**/**.{tsx,js,jsx,ts}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
	//colors: {
	//    ligth:{
	//	primary: Colors.light.primary,
	//	secondary: Colors.light.secondary,
	//	tertiary: Colors.light.tertiary,
	//	background: Colors.light.background,
	//	text: Colors.light.text,
	  //  },
	 //   dark:{
	//	primary: Colors.dark.primary,
	//	secondary: Colors.dark.secondary,
	//	tertiary: Colors.dark.tertiary,
	//	background: Colors.dark.background,
	//	text: Colors.dark.text,
	  //  }
	//}   
    },
  },
  plugins: [],
}