export async function GET(request, { params }) {
  console.log(request);
  return Response.json({ test: "test" });
}
//export async function POST(){}