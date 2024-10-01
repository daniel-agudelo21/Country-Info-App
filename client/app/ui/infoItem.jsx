export default function InfoItem({ icon, label, value }) {
    return (
        <div className="flex  space-x-3 bg-background/30 p-3 rounded-lg transition-all duration-300 ">
            {icon}
            <div>
                <p className="text-sm dark:text-white/50 text-black/60 ">{label}</p>
                <p className="font-medium">{value}</p>
            </div>
        </div>
    )
}