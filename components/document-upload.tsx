"use client"

import type React from "react"

import { useState } from "react"
import { Upload, FileText, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DocumentUpload() {
  const [files, setFiles] = useState<File[]>([])
  const [documentType, setDocumentType] = useState("id")
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "success" | "error">("idle")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  const handleUpload = async () => {
    if (files.length === 0) return

    setUploadStatus("uploading")

    // Simulate API call
    setTimeout(() => {
      setUploadStatus("success")
      // In a real app, you would send the files to your backend
      // const formData = new FormData()
      // files.forEach(file => formData.append('documents', file))
      // formData.append('documentType', documentType)
      // await fetch('/api/upload-documents', { method: 'POST', body: formData })
    }, 2000)
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Document Verification</CardTitle>
        <CardDescription>Upload the required documents for your rental application verification</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="upload" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upload">Upload Documents</TabsTrigger>
            <TabsTrigger value="status">Verification Status</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          <TabsContent value="upload" className="space-y-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="document-type">Document Type</Label>
                <RadioGroup
                  id="document-type"
                  value={documentType}
                  onValueChange={setDocumentType}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2"
                >
                  <div className="flex items-center space-x-2 border rounded-md p-4">
                    <RadioGroupItem value="id" id="id" />
                    <Label htmlFor="id" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      ID Document
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-4">
                    <RadioGroupItem value="income" id="income" />
                    <Label htmlFor="income" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Proof of Income
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-4">
                    <RadioGroupItem value="reference" id="reference" />
                    <Label htmlFor="reference" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      References
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="file-upload">Upload File</Label>
                <div className="border-2 border-dashed rounded-lg p-6 text-center">
                  <Input id="file-upload" type="file" multiple onChange={handleFileChange} className="hidden" />
                  <Label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center gap-2">
                    <Upload className="h-10 w-10 text-muted-foreground" />
                    <span className="text-sm font-medium">Drag and drop files here or click to browse</span>
                    <span className="text-xs text-muted-foreground">Supported formats: PDF, JPG, PNG (Max 10MB)</span>
                  </Label>
                </div>
              </div>

              {files.length > 0 && (
                <div className="space-y-2">
                  <Label>Selected Files</Label>
                  <div className="border rounded-lg divide-y">
                    {files.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-3">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{file.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
          <TabsContent value="status">
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="font-medium">ID Verification</p>
                    <p className="text-sm text-muted-foreground">Verified on May 12, 2023</p>
                  </div>
                </div>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-500" />
                  <div>
                    <p className="font-medium">Income Verification</p>
                    <p className="text-sm text-muted-foreground">Pending review</p>
                  </div>
                </div>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  <div>
                    <p className="font-medium">References</p>
                    <p className="text-sm text-muted-foreground">Not submitted</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="history">
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <p className="font-medium">Document History</p>
                <Separator className="my-2" />
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>ID Document uploaded</span>
                    <span className="text-muted-foreground">May 10, 2023</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>ID Document verified</span>
                    <span className="text-muted-foreground">May 12, 2023</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Income proof uploaded</span>
                    <span className="text-muted-foreground">May 15, 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleUpload}
          disabled={files.length === 0 || uploadStatus === "uploading" || uploadStatus === "success"}
          className="w-full"
        >
          {uploadStatus === "uploading"
            ? "Uploading..."
            : uploadStatus === "success"
              ? "Uploaded Successfully"
              : "Upload Documents"}
        </Button>
      </CardFooter>
    </Card>
  )
}

