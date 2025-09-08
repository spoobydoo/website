export default function myImageLoader({ src }) {
  return src.startsWith('/') ? `.${src}` : src;
}
