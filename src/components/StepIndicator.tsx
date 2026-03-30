interface StepIndicatorProps {
  currentStep: 1 | 2 | 3;
}

const steps = ["Cart", "Details", "Confirm"] as const;

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-4 md:gap-8">
      {steps.map((label, idx) => {
        const step     = idx + 1;
        const done     = step < currentStep;
        const active   = step === currentStep;
        const upcoming = step > currentStep;

        return (
          <div key={label} className="flex items-center gap-4 md:gap-8">
            <div className="flex items-center gap-3">
              {/* Circle */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                  done
                    ? "bg-secondary-container text-on-secondary-container"
                    : active
                    ? "bg-primary text-on-primary ring-4 ring-primary-container/30"
                    : "bg-surface-container-highest text-on-surface/40"
                }`}
              >
                {done ? (
                  <span
                    className="material-symbols-outlined text-xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check
                  </span>
                ) : (
                  step
                )}
              </div>

              {/* Label */}
              <span
                className={`hidden md:block font-headline font-bold ${
                  active
                    ? "text-primary font-extrabold"
                    : done
                    ? "text-on-surface/60"
                    : "text-on-surface/30"
                }`}
              >
                {label}
              </span>
            </div>

            {/* Connector line — don't render after last step */}
            {step < steps.length && (
              <div
                className={`h-[2px] w-12 md:w-24 rounded-full ${
                  step < currentStep ? "bg-primary-container" : "bg-surface-container-highest"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
