import gulp from "gulp";
import pug from "gulp-pug";

const routes = {
  pug: {
    src: "src/*.pug",
  },
};

export const pug = () => gulp.src("");

export const dev = () => console.log("I will dev");
