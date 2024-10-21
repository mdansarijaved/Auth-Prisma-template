import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle, ArrowLeft, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
            <AlertCircle className="w-8 h-8 text-red-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800">
            Authentication Error
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-600 mb-4">
            We&apos;re sorry, but we couldn&apos;t authenticate your account.
            This could be due to one of the following reasons:
          </p>
          <ul className="text-sm text-gray-500 list-disc list-inside mb-4">
            <li>Your session may have expired</li>
            <li>There might be an issue with your account</li>
            <li>Our authentication service might be experiencing problems</li>
          </ul>
          <p className="text-gray-600 mb-4">Please try the following steps:</p>
          <ol className="text-sm text-gray-500 list-decimal list-inside mb-4">
            <li>Refresh the page and try logging in again</li>
            <li>Clear your browser cache and cookies</li>
            <li>If the problem persists, please contact our support team</li>
          </ol>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant={"outline"} asChild className="w-full sm:w-auto">
            <Link href="/auth/login">
              <RefreshCw className="mr-2 h-4 w-4" /> Try Again
            </Link>
          </Button>
          <Button asChild className="w-full sm:w-auto">
            <Link href="/auth/login">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Login
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
