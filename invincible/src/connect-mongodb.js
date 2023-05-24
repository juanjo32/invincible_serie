// eslint-disable-next-line @typescript-eslint/no-var-requires
const { MongoClient } = require('mongodb');

const connectionUri =
  'mongodb+srv://invincible:property_password_321@invincible.hjddlxk.mongodb.net/?retryWrites=true&w=majority';

async function connectToMongoDB() {
  try {
    const client = new MongoClient(connectionUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Connect to the MongoDB Atlas cluster
    await client.connect();

    console.log('Connected to MongoDB Atlas');

    // Perform any desired database operations here

    // Close the connection
    await client.close();
    console.log('Disconnected from MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
  }
}

// Call the function to connect to MongoDB Atlas
connectToMongoDB();
