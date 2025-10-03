"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";


export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md shadow-lg rounded-2xl">
        <CardContent className="p-6 flex flex-col items-center">
          {/* Logo */}
          <div className="flex flex-col items-center mb-6">
            <Image
              src={logo} // replace with your logo
              alt="BusGo Logo"
              width={120}
              height={120}
              className="mb-2"
            />
          </div>

          {/* Social login */}
          <div className="flex gap-4 mb-6">
            <Button variant="outline" className="flex items-center gap-2">
              <Facebook className="text-blue-600" /> Facebook
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Instagram className="text-red-500" /> Instagram
            </Button>
          </div>

          <Separator className="mb-6" />

          {/* Inputs */}
          <div className="w-full space-y-4">
            <Input
              placeholder="Full Name"
              className="h-11"
              autoComplete="off"
            />
            <Input
              placeholder="E-mail Address"
              type="email"
              className="h-11"
              autoComplete="off"
            />
            <Input placeholder="Phone Number" type="tel" autoComplete="off" />
            <Input
              type="password"
              placeholder="Password"
              autoComplete="new-password"
            />
            <Button className="w-full h-11 bg-primary text-white rounded-lg">
              Sign Up
            </Button>
          </div>

          {/* Links */}
          <div className="flex justify-center w-full mt-4 text-sm">
            <p>
              Already have an account?{" "}
              <Link href="/signin" className="text-primary hover:underline">
                Login
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
