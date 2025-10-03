"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";
import logo from "../../../public/images/logo.png";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md shadow-lg rounded-2xl">
        <CardContent className="p-6 flex flex-col items-center">
          {/* Logo */}
          <div className="flex flex-col items-center mb-6">
            <Image
              src={logo}
              alt="BusGo Logo"
              width={120}
              height={120}
              className="mb-2"
            />
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-800 mb-4">LOGIN</h3>

          {/* Social login */}
          <div className="flex gap-4 mb-6">
            <Button variant="outline" className="flex items-center gap-2">
              <Facebook className="text-blue-600" /> Facebook
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Instagram className="text-red-500" /> Instagram
            </Button>
          </div>

          {/* Inputs */}
          <div className="w-full space-y-4">
            <Input
              placeholder="E-mail / Phone Number"
              //   className="h-11"
              autoComplete="off"
            />
            <Input
              type="password"
              placeholder="Password"
              //   className="h-11"
              autoComplete="new-password"
            />
            <Button className="w-full bg-primary text-white rounded-lg py-3">
              Login
            </Button>
          </div>

          {/* Links */}
          <div className="flex justify-between w-full mt-4 text-sm">
            <a href="#" className="text-primary hover:underline">
              Forgot Password?
            </a>
            <p className="">
              New User?{" "}
              <Link href="/signup" className="text-primary hover:underline">
                {" "}
                Sign Up
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
