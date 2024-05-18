import { src, dest } from 'gulp';
import imagemin from 'gulp-imagemin';

export default async (cb) => {
  return src('src/assets/images/*.{jpg,png}')
  .pipe(imagemin({verbose: true}))
  .pipe(dest('src/assets/compressed2'));

  cb();
}