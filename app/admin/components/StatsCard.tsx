import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '../../admin/components/ui/card';
import { cn } from '../../admin/lib/utils';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  icon: LucideIcon;
  gradient: 'violet' | 'blue' | 'green' | 'red' | 'orange';
}

export function StatsCard({ title, value, change, trend, icon: Icon, gradient }: StatsCardProps) {
  const gradientClasses = {
    violet: 'bg-gradient-violet',
    blue: 'bg-gradient-blue',
    green: 'bg-gradient-green',
    red: 'bg-gradient-red',
    orange: 'bg-gradient-orange'
  };

  const trendColors = {
    up: 'text-green',
    down: 'text-red',
    neutral: 'text-muted-foreground'
  };

  return (
    <Card className="relative overflow-hidden shadow-card hover:shadow-soft transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold text-foreground">{value}</p>
            <p className={cn('text-sm font-medium', trendColors[trend])}>
              {change}
            </p>
          </div>
          <div className={cn('w-16 h-16 rounded-2xl flex items-center justify-center', gradientClasses[gradient])}>
            <Icon className="w-8 h-8 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}