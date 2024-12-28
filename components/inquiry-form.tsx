"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function InquiryForm() {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Get in Touch</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="Enter your phone number" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="interest">Area of Interest</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select your interest" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web">Web Development</SelectItem>
                <SelectItem value="app">App Development</SelectItem>
                <SelectItem value="ai">AI Solutions</SelectItem>
                <SelectItem value="internship">Internship Programs</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button type="submit" className="w-full">Submit Inquiry</Button>
      </DialogContent>
    </Dialog>
  );
}