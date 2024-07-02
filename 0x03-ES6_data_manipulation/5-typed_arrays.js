/**
 * creates Int8 TypedArray.
 * @author Khalfan Athman <https://github.com/AbuArwa001>
 * @returns {
 * DataView {
 * byteLength: 10,
 * byteOffset: 0,
 * buffer: ArrayBuffer {
 *   [Uint8Contents]: <00 00 59 00 00 00 00 00 00 00>,
 *    byteLength: 10
 * }
 * }}
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);
  dataView.setInt8(position, value);

  return dataView;
}
