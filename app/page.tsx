import { DocumentUpload } from "@/components/document-upload"
import { VerificationDashboard } from "@/components/verification-dashboard"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="w-full max-w-md mx-auto mb-8">
            <TabsTrigger value="dashboard" className="flex-1">
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="documents" className="flex-1">
              Documents
            </TabsTrigger>
          </TabsList>
          <TabsContent value="dashboard">
            <VerificationDashboard />
          </TabsContent>
          <TabsContent value="documents">
            <DocumentUpload />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

