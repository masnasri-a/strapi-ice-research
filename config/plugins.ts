export default ({ env }) => ({
    upload: {
        config: {
            provider: 'aws-s3',
            providerOptions: {
                accessKeyId: env('AWS_ACCESS_ID'),
                secretAccessKey: env('AWS_ACCESS_KEY'),
                region: env('AWS_REGION'),
                params: {
                    Bucket: env('AWS_S3_BUCKET'),
                },
            },
        },
    }
  });