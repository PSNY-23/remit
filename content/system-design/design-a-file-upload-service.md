---
title: "System Design: Scalable File & Video Upload Service"
category: "System Architectures"
description: "S3 Presigned URLs, multipart chunked uploads, resumable uploads, metadata extraction, and CDN distribution."
---

# System Design: Scalable File Upload Service

Designing a high-throughput file upload service capable of handling multi-gigabyte video uploads without saturating application server bandwidth.

---

## 1. Direct-to-Storage Upload Architecture (Presigned URLs)

```
Client (Browser / Mobile)                 API Gateway / Service                     Amazon S3 Bucket
        │                                           │                                       │
        ├── 1. POST /files/upload-request ─────────►│                                       │
        │   (filename, size, MIME type)             ├── 2. Generate S3 Presigned URL        │
        │◄── 3. Return Presigned URL (Expires 15m) ─┤                                       │
        │                                                                                   │
        ├── 4. PUT File Binary Directly to S3 Presigned URL ───────────────────────────────►│
        │                                                                                   │
        │                                                                                   ├── 5. S3 Event Notification
        │                                                                                   │   (s3:ObjectCreated:*)
        │                                                                                   ▼
        │                                                                           [ Kafka / SQS Queue ]
        │                                                                                   │
        │                                                                                   ▼
        │                                                                           [ Transcoder Worker Pool ]
        │                                                                           (FFmpeg thumbnail & HLS)
```

---

## 2. Multipart Chunked & Resumable Uploads
- Large files ($>100\text{MB}$) are split into 5MB chunks on client.
- Chunks upload in parallel. If network disconnects, only failed chunks retry instead of restarting the entire upload.
