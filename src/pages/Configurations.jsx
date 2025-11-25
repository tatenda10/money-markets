import React, { useState } from 'react';
import { Save, Clock, Globe, FileText, Bell, Database, DollarSign, Server, Shield } from 'lucide-react';

const Configurations = () => {
    const [configs, setConfigs] = useState({
        // SOD Run Settings
        sodRunTime: '08:00',
        autoRunEnabled: true,
        runTimeout: 300,
        retryAttempts: 3,
        
        // FX Rate Settings
        fxRateProvider: 'Bloomberg',
        fxUpdateFrequency: '15',
        fxRateTimeout: 60,
        fxRateRetryAttempts: 5,
        
        // Report Settings
        reportFormat: 'PDF',
        reportRetentionDays: 90,
        autoGenerateReports: true,
        includeCharts: true,
        
        // System Preferences
        timezone: 'UTC',
        dateFormat: 'DD/MM/YYYY',
        numberFormat: 'en-US',
        decimalPlaces: 2,
        
        // Notification Settings
        emailNotifications: true,
        notificationEmail: 'admin@finreports.com',
        notifyOnFailure: true,
        notifyOnSuccess: false,
        
        // Data Retention
        dataRetentionDays: 365,
        archiveOldRuns: true,
        archiveAfterDays: 30,
        
        // Currency Settings
        baseCurrency: 'USD',
        supportedCurrencies: ['USD', 'EUR', 'GBP', 'ZAR', 'ZWL'],
        currencyPrecision: 2,
        
        // Security Settings
        sessionTimeout: 30,
        requirePasswordChange: false,
        passwordExpiryDays: 90,
        enableAuditLog: true,
    });

    const [activeSection, setActiveSection] = useState('sod');

    const handleChange = (key, value) => {
        setConfigs(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const handleSave = () => {
        // Simulate saving configuration
        console.log('Saving configurations:', configs);
        alert('Configurations saved successfully!');
    };

    const sections = [
        { id: 'sod', label: 'SOD Run Settings', icon: Clock },
        { id: 'fx', label: 'FX Rate Settings', icon: DollarSign },
        { id: 'reports', label: 'Report Settings', icon: FileText },
        { id: 'system', label: 'System Preferences', icon: Server },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'data', label: 'Data Retention', icon: Database },
        { id: 'currency', label: 'Currency Settings', icon: Globe },
        { id: 'security', label: 'Security', icon: Shield },
    ];

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">System Configurations</h1>
                    <p className="text-sm text-gray-600 mt-1">Manage system settings and preferences</p>
                </div>
                <button
                    onClick={handleSave}
                    className="flex items-center gap-2 px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors"
                >
                    <Save size={16} />
                    Save Changes
                </button>
            </div>

            <div className="flex gap-6">
                {/* Sidebar Navigation */}
                <aside className="w-64 flex-shrink-0">
                    <nav className="bg-white border border-gray-200 rounded-lg p-2">
                        {sections.map((section) => {
                            const Icon = section.icon;
                            const isActive = activeSection === section.id;
                            return (
                                <button
                                    key={section.id}
                                    onClick={() => setActiveSection(section.id)}
                                    className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium transition-colors rounded-md mb-1 ${
                                        isActive
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                                >
                                    <Icon size={18} />
                                    <span>{section.label}</span>
                                </button>
                            );
                        })}
                    </nav>
                </aside>

                {/* Configuration Content */}
                <div className="flex-1">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                        {/* SOD Run Settings */}
                        {activeSection === 'sod' && (
                            <div className="space-y-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">SOD Run Settings</h2>
                                
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Scheduled Run Time
                                        </label>
                                        <input
                                            type="time"
                                            value={configs.sodRunTime}
                                            onChange={(e) => handleChange('sodRunTime', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Run Timeout (seconds)
                                        </label>
                                        <input
                                            type="number"
                                            value={configs.runTimeout}
                                            onChange={(e) => handleChange('runTimeout', parseInt(e.target.value))}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Retry Attempts
                                        </label>
                                        <input
                                            type="number"
                                            value={configs.retryAttempts}
                                            onChange={(e) => handleChange('retryAttempts', parseInt(e.target.value))}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        id="autoRunEnabled"
                                        checked={configs.autoRunEnabled}
                                        onChange={(e) => handleChange('autoRunEnabled', e.target.checked)}
                                        className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                                    />
                                    <label htmlFor="autoRunEnabled" className="text-sm font-medium text-gray-700">
                                        Enable Automatic SOD Runs
                                    </label>
                                </div>
                            </div>
                        )}

                        {/* FX Rate Settings */}
                        {activeSection === 'fx' && (
                            <div className="space-y-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">FX Rate Settings</h2>
                                
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            FX Rate Provider
                                        </label>
                                        <select
                                            value={configs.fxRateProvider}
                                            onChange={(e) => handleChange('fxRateProvider', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                        >
                                            <option value="Bloomberg">Bloomberg</option>
                                            <option value="Reuters">Reuters</option>
                                            <option value="XE">XE</option>
                                            <option value="Custom">Custom API</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Update Frequency (minutes)
                                        </label>
                                        <input
                                            type="number"
                                            value={configs.fxUpdateFrequency}
                                            onChange={(e) => handleChange('fxUpdateFrequency', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Rate Fetch Timeout (seconds)
                                        </label>
                                        <input
                                            type="number"
                                            value={configs.fxRateTimeout}
                                            onChange={(e) => handleChange('fxRateTimeout', parseInt(e.target.value))}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Retry Attempts
                                        </label>
                                        <input
                                            type="number"
                                            value={configs.fxRateRetryAttempts}
                                            onChange={(e) => handleChange('fxRateRetryAttempts', parseInt(e.target.value))}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Report Settings */}
                        {activeSection === 'reports' && (
                            <div className="space-y-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Report Settings</h2>
                                
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Default Report Format
                                        </label>
                                        <select
                                            value={configs.reportFormat}
                                            onChange={(e) => handleChange('reportFormat', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                        >
                                            <option value="PDF">PDF</option>
                                            <option value="Excel">Excel</option>
                                            <option value="CSV">CSV</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Report Retention (days)
                                        </label>
                                        <input
                                            type="number"
                                            value={configs.reportRetentionDays}
                                            onChange={(e) => handleChange('reportRetentionDays', parseInt(e.target.value))}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            id="autoGenerateReports"
                                            checked={configs.autoGenerateReports}
                                            onChange={(e) => handleChange('autoGenerateReports', e.target.checked)}
                                            className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                                        />
                                        <label htmlFor="autoGenerateReports" className="text-sm font-medium text-gray-700">
                                            Auto-generate Reports After SOD Run
                                        </label>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            id="includeCharts"
                                            checked={configs.includeCharts}
                                            onChange={(e) => handleChange('includeCharts', e.target.checked)}
                                            className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                                        />
                                        <label htmlFor="includeCharts" className="text-sm font-medium text-gray-700">
                                            Include Charts in Reports
                                        </label>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* System Preferences */}
                        {activeSection === 'system' && (
                            <div className="space-y-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">System Preferences</h2>
                                
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Timezone
                                        </label>
                                        <select
                                            value={configs.timezone}
                                            onChange={(e) => handleChange('timezone', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                        >
                                            <option value="UTC">UTC</option>
                                            <option value="America/New_York">America/New_York</option>
                                            <option value="Europe/London">Europe/London</option>
                                            <option value="Africa/Harare">Africa/Harare</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Date Format
                                        </label>
                                        <select
                                            value={configs.dateFormat}
                                            onChange={(e) => handleChange('dateFormat', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                        >
                                            <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                                            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                                            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Number Format
                                        </label>
                                        <select
                                            value={configs.numberFormat}
                                            onChange={(e) => handleChange('numberFormat', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                        >
                                            <option value="en-US">US (1,234.56)</option>
                                            <option value="en-GB">UK (1,234.56)</option>
                                            <option value="de-DE">German (1.234,56)</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Decimal Places
                                        </label>
                                        <input
                                            type="number"
                                            value={configs.decimalPlaces}
                                            onChange={(e) => handleChange('decimalPlaces', parseInt(e.target.value))}
                                            min="0"
                                            max="6"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Notification Settings */}
                        {activeSection === 'notifications' && (
                            <div className="space-y-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Notification Settings</h2>
                                
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            id="emailNotifications"
                                            checked={configs.emailNotifications}
                                            onChange={(e) => handleChange('emailNotifications', e.target.checked)}
                                            className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                                        />
                                        <label htmlFor="emailNotifications" className="text-sm font-medium text-gray-700">
                                            Enable Email Notifications
                                        </label>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Notification Email
                                        </label>
                                        <input
                                            type="email"
                                            value={configs.notificationEmail}
                                            onChange={(e) => handleChange('notificationEmail', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                id="notifyOnFailure"
                                                checked={configs.notifyOnFailure}
                                                onChange={(e) => handleChange('notifyOnFailure', e.target.checked)}
                                                className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                                            />
                                            <label htmlFor="notifyOnFailure" className="text-sm font-medium text-gray-700">
                                                Notify on Run Failure
                                            </label>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                id="notifyOnSuccess"
                                                checked={configs.notifyOnSuccess}
                                                onChange={(e) => handleChange('notifyOnSuccess', e.target.checked)}
                                                className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                                            />
                                            <label htmlFor="notifyOnSuccess" className="text-sm font-medium text-gray-700">
                                                Notify on Successful Run
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Data Retention */}
                        {activeSection === 'data' && (
                            <div className="space-y-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Data Retention</h2>
                                
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Data Retention Period (days)
                                        </label>
                                        <input
                                            type="number"
                                            value={configs.dataRetentionDays}
                                            onChange={(e) => handleChange('dataRetentionDays', parseInt(e.target.value))}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Archive After (days)
                                        </label>
                                        <input
                                            type="number"
                                            value={configs.archiveAfterDays}
                                            onChange={(e) => handleChange('archiveAfterDays', parseInt(e.target.value))}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        id="archiveOldRuns"
                                        checked={configs.archiveOldRuns}
                                        onChange={(e) => handleChange('archiveOldRuns', e.target.checked)}
                                        className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                                    />
                                    <label htmlFor="archiveOldRuns" className="text-sm font-medium text-gray-700">
                                        Automatically Archive Old Runs
                                    </label>
                                </div>
                            </div>
                        )}

                        {/* Currency Settings */}
                        {activeSection === 'currency' && (
                            <div className="space-y-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Currency Settings</h2>
                                
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Base Currency
                                        </label>
                                        <select
                                            value={configs.baseCurrency}
                                            onChange={(e) => handleChange('baseCurrency', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                        >
                                            <option value="USD">USD</option>
                                            <option value="EUR">EUR</option>
                                            <option value="GBP">GBP</option>
                                            <option value="ZAR">ZAR</option>
                                            <option value="ZWL">ZWL</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Currency Precision
                                        </label>
                                        <input
                                            type="number"
                                            value={configs.currencyPrecision}
                                            onChange={(e) => handleChange('currencyPrecision', parseInt(e.target.value))}
                                            min="0"
                                            max="6"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Supported Currencies
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {['USD', 'EUR', 'GBP', 'ZAR', 'ZWL', 'JPY', 'AUD', 'CHF'].map((currency) => (
                                            <label key={currency} className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                                                <input
                                                    type="checkbox"
                                                    checked={configs.supportedCurrencies.includes(currency)}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            handleChange('supportedCurrencies', [...configs.supportedCurrencies, currency]);
                                                        } else {
                                                            handleChange('supportedCurrencies', configs.supportedCurrencies.filter(c => c !== currency));
                                                        }
                                                    }}
                                                    className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                                                />
                                                <span className="text-sm font-medium text-gray-700">{currency}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Security Settings */}
                        {activeSection === 'security' && (
                            <div className="space-y-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Security Settings</h2>
                                
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Session Timeout (minutes)
                                        </label>
                                        <input
                                            type="number"
                                            value={configs.sessionTimeout}
                                            onChange={(e) => handleChange('sessionTimeout', parseInt(e.target.value))}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Password Expiry (days)
                                        </label>
                                        <input
                                            type="number"
                                            value={configs.passwordExpiryDays}
                                            onChange={(e) => handleChange('passwordExpiryDays', parseInt(e.target.value))}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            id="requirePasswordChange"
                                            checked={configs.requirePasswordChange}
                                            onChange={(e) => handleChange('requirePasswordChange', e.target.checked)}
                                            className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                                        />
                                        <label htmlFor="requirePasswordChange" className="text-sm font-medium text-gray-700">
                                            Require Password Change on First Login
                                        </label>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            id="enableAuditLog"
                                            checked={configs.enableAuditLog}
                                            onChange={(e) => handleChange('enableAuditLog', e.target.checked)}
                                            className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                                        />
                                        <label htmlFor="enableAuditLog" className="text-sm font-medium text-gray-700">
                                            Enable Audit Logging
                                        </label>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Configurations;
