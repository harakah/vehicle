export default async function handler (event, context) {
  try {
    setTimeout(() => {
      return {
        statusCode: 200,
        event,
        context
      };
    }, 15000);
  } catch (err) {
    return {
      statusCode: 200,
      event,
      context
    };
  } 
}
