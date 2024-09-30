'use client'

import InfoItem from "./infoItem"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Globe, Users, MapPin, DollarSign, Flag, Languages } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function DynamicCountriesList() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
            <header className="bg-primary text-primary-foreground py-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center">Explore the World</h1>
                </div>
            </header>
            <main className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    <Card className="bg-background/50 backdrop-blur-sm border-none shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-2xl font-semibold">Country Details</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <AnimatePresence mode="wait">
                                {country ? (
                                    <motion.div
                                        key={country.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-6"
                                    >
                                        <div className="flex items-center space-x-4">
                                            <img
                                                src={country.flagUrl}
                                                alt={`${country.name} flag`}
                                                className="w-20 h-12 object-cover rounded shadow-md"
                                                
                                            />
                                            <h3 className="text-3xl font-bold">{country.name}</h3>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <InfoItem icon={<MapPin className="h-5 w-5 text-primary" />} label="Capital" value={country.capital} />
                                            <InfoItem icon={<Users className="h-5 w-5 text-primary" />} label="Population" value={formatNumber(country.population)} />
                                            <InfoItem icon={<Globe className="h-5 w-5 text-primary" />} label="Region" value={country.region} />
                                            <InfoItem icon={<Flag className="h-5 w-5 text-primary" />} label="Area" value={`${formatNumber(country.area)} km²`} />
                                            <InfoItem icon={<DollarSign className="h-5 w-5 text-primary" />} label="Currency" value={country.currency} />
                                            <InfoItem icon={<Languages className="h-5 w-5 text-primary" />} label="Language" value={country.language} />
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-center text-muted-foreground"
                                    >
                                        <Globe className="h-20 w-20 mx-auto mb-4 text-primary/50" />
                                        <p className="text-lg">Select a country from the list to view its details.</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}
<AlarmClock />