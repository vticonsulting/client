export default function minLength(min) {
  return {
    $validator: minLength(min),
    $message: ({$params}) =>
      `This field should be at least ${$params.min} long.`,
    $params: {min},
  }
}
