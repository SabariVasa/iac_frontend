import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@heroui/button';

export default function CostEstimationPage() {
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Cost Estimation</h2>
      <Card className="mt-4">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="platform">Platform</Label>
              <Select id="platform" onValueChange={setSelectedPlatform}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vmware">VMware</SelectItem>
                  <SelectItem value="aws">AWS</SelectItem>
                  <SelectItem value="azure">Azure</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Select id="location" onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us-east">US East</SelectItem>
                  <SelectItem value="us-west">US West</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity</Label>
              <Input id="quantity" type="number" min="1" defaultValue="1" />
            </div>
          </div>
          <Button className="mt-4">Calculate Cost</Button>
        </form>
      </Card>
    </div>
  );
}
