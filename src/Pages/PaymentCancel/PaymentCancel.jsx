import React from "react";
import { Link } from "react-router";

const PaymentCancel = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-base-200 px-4">
            <div className="card w-full max-w-md shadow-xl bg-base-100">
                <div className="card-body text-center">
                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                        <div className="text-error">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-16 w-16"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-error">Payment Cancelled</h2>
                    <p className="mt-2 text-base-content/70">
                        Your payment could not be completed or was cancelled.
                    </p>

                    <div className="card-actions justify-center mt-6">
                        <Link to="/">
                            <button className="btn btn-outline btn-secondary">Go Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentCancel;
