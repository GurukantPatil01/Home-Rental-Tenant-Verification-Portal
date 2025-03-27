import { CheckCircle, Clock, AlertCircle, User, Home, FileText, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export function VerificationDashboard() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Verification Dashboard</h1>
          <p className="text-muted-foreground">Track your verification status and rental applications</p>
        </div>
        <Badge variant="outline" className="px-3 py-1 text-sm bg-green-50 text-green-700 border-green-200">
          Verification Score: 85/100
        </Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Verification Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75%</div>
            <Progress value={75} className="h-2 mt-2" />
            <div className="grid grid-cols-2 gap-2 mt-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-3 w-3 text-green-500" />
                <span>ID Verified</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-3 w-3 text-green-500" />
                <span>Income Verified</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3 text-amber-500" />
                <span>References Pending</span>
              </div>
              <div className="flex items-center gap-1">
                <AlertCircle className="h-3 w-3 text-red-500" />
                <span>Credit Check Missing</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <div className="space-y-2 mt-4">
              <div className="flex justify-between items-center text-sm">
                <span>123 Main St, Apt 4B</span>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  In Review
                </Badge>
              </div>
              <Separator />
              <div className="flex justify-between items-center text-sm">
                <span>456 Park Ave</span>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  Approved
                </Badge>
              </div>
              <Separator />
              <div className="flex justify-between items-center text-sm">
                <span>789 Broadway</span>
                <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                  Pending
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Document Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5/7</div>
            <Progress value={71} className="h-2 mt-2" />
            <div className="space-y-2 mt-4">
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span>ID Document</span>
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  Verified
                </Badge>
              </div>
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span>Proof of Income</span>
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  Verified
                </Badge>
              </div>
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span>References</span>
                </div>
                <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                  Pending
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Tenant Profile</CardTitle>
            <CardDescription>Your verified information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-muted rounded-full p-3">
                <User className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium">Personal Information</h3>
                <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                  <div>
                    <p className="text-muted-foreground">Full Name</p>
                    <p>John Doe</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Date of Birth</p>
                    <p>January 15, 1985</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Phone</p>
                    <p>(555) 123-4567</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Email</p>
                    <p>john.doe@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-4">
              <div className="bg-muted rounded-full p-3">
                <Home className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium">Rental History</h3>
                <div className="space-y-2 mt-2 text-sm">
                  <div>
                    <p className="text-muted-foreground">Current Address</p>
                    <p>789 Oak St, Apt 3C, New York, NY 10001</p>
                    <p className="text-xs text-muted-foreground">Since: June 2020</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Previous Address</p>
                    <p>456 Pine St, Boston, MA 02108</p>
                    <p className="text-xs text-muted-foreground">June 2018 - May 2020</p>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-4">
              <div className="bg-muted rounded-full p-3">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium">Verification Status</h3>
                <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Identity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Income</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-amber-500" />
                    <span>References</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-red-500" />
                    <span>Credit Check</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rental Agreement</CardTitle>
            <CardDescription>View and sign your rental agreements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">456 Park Ave</h3>
                  <p className="text-sm text-muted-foreground">Lease Agreement</p>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Signed</Badge>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Start Date</p>
                  <p>June 1, 2023</p>
                </div>
                <div>
                  <p className="text-muted-foreground">End Date</p>
                  <p>May 31, 2024</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Monthly Rent</p>
                  <p>$2,500</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Security Deposit</p>
                  <p>$3,750</p>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">123 Main St, Apt 4B</h3>
                  <p className="text-sm text-muted-foreground">Lease Agreement</p>
                </div>
                <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                  Pending
                </Badge>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Start Date</p>
                  <p>July 15, 2023</p>
                </div>
                <div>
                  <p className="text-muted-foreground">End Date</p>
                  <p>July 14, 2024</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Monthly Rent</p>
                  <p>$2,800</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Security Deposit</p>
                  <p>$4,200</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

