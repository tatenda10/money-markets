import React, { useState } from 'react';
import { Save, User, Palette, Bell, Shield, LayoutDashboard, Download, Key, Mail } from 'lucide-react';

const Settings = () => {
    const [settings, setSettings] = useState({
        // Profile Settings
        fullName: 'Liam Smith',
        email: 'smith@example.com',
        phone: '+1 (555) 123-4567',
        department: 'Finance',
        role: 'Administrator',
        
        // Display Preferences
        theme: 'Light',
        language: 'English',
        dateFormat: 'DD/MM/YYYY',
        timeFormat: '24-hour',
        numberFormat: 'en-US',
        
        // Dashboard Preferences
        defaultView: 'SOD Runs',
        showCharts: true,
        showNotifications: true,
        itemsPerPage: 25,
        autoRefresh: false,
        refreshInterval: 30,
        
        // Notification Preferences
        emailNotifications: true,
        browserNotifications: true,
        notifyOnRunComplete: true,
        notifyOnRunFailure: true,
        notifyOnSystemAlerts: true,
        quietHoursEnabled: false,
        quietHoursStart: '22:00',
        quietHoursEnd: '08:00',
        
        // Account Security
        twoFactorAuth: false,
        sessionTimeout: 30,
        requirePasswordChange: false,
        lastPasswordChange: '2024-01-15',
        
        // Export/Import Settings
        defaultExportFormat: 'Excel',
        includeHeaders: true,
        includeCharts: false,
        exportLocation: 'Downloads',
        autoSaveExports: true,
        
        // API & Integration
        apiKey: '••••••••••••••••',
        apiKeyExpiry: '2025-12-31',
        webhookUrl: '',
        enableWebhooks: false,
    });

    const [activeSection, setActiveSection] = useState('profile');

    const handleChange = (key, value) => {
        setSettings(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const handleSave = () => {
        // Simulate saving settings
        console.log('Saving settings:', settings);
        alert('Settings saved successfully!');
    };

    const sections = [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'display', label: 'Display Preferences', icon: Palette },
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'security', label: 'Security', icon: Shield },
        { id: 'export', label: 'Export/Import', icon: Download },
        { id: 'api', label: 'API & Integration', icon: Key },
    ];

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
                    <p className="text-sm text-gray-600 mt-1">Manage your account settings and preferences</p>
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

                {/* Settings Content */}
                <div className="flex-1">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                        {/* Profile Settings */}
                        {activeSection === 'profile' && (
                            <div className="space-y-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Profile Information</h2>
                                
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                                        LS
                                    </div>
                                    <div>
                                        <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 border border-gray-200 transition-colors">
                                            Change Photo
                                        </button>
                                        <p className="text-xs text-gray-500 mt-1">JPG, PNG or GIF. Max size 2MB</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            value={settings.fullName}
                                            onChange={(e) => handleChange('fullName', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            value={settings.email}
                                            onChange={(e) => handleChange('email', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            value={settings.phone}
                                            onChange={(e) => handleChange('phone', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Department
                                        </label>
                                        <input
                                            type="text"
                                            value={settings.department}
                                            onChange={(e) => handleChange('department', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Role
                                        </label>
                                        <input
                                            type="text"
                                            value={settings.role}
                                            disabled
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Display Preferences */}
                        {activeSection === 'display' && (
                            <div className="space-y-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Display Preferences</h2>
                                
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Theme
                                        </label>
                                        <select
                                            value={settings.theme}
                                            onChange={(e) => handleChange('theme', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                        >
                                            <option value="Light">Light</option>
                                            <option value="Dark">Dark</option>
                                            <option value="Auto">Auto (System)</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Language
                                        </label>
                                        <select
                                            value={settings.language}
                                            onChange={(e) => handleChange('language', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                        >
                                            <option value="English">English</option>
                                            <option value="Spanish">Spanish</option>
                                            <option value="French">French</option>
                                            <option value="German">German</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Date Format
                                        </label>
                                        <select
                                            value={settings.dateFormat}
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
                                            Time Format
                                        </label>
                                        <select
                                            value={settings.timeFormat}
                                            onChange={(e) => handleChange('timeFormat', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                        >
                                            <option value="24-hour">24-hour</option>
                                            <option value="12-hour">12-hour (AM/PM)</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Number Format
                                        </label>
                                        <select
                                            value={settings.numberFormat}
                                            onChange={(e) => handleChange('numberFormat', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                        >
                                            <option value="en-US">US (1,234.56)</option>
                                            <option value="en-GB">UK (1,234.56)</option>
                                            <option value="de-DE">German (1.234,56)</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Dashboard Preferences */}
                        {activeSection === 'dashboard' && (
                            <div className="space-y-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Dashboard Preferences</h2>
                                
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Default View
                                        </label>
                                        <select
                                            value={settings.defaultView}
                                            onChange={(e) => handleChange('defaultView', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                        >
                                            <option value="SOD Runs">SOD Runs</option>
                                            <option value="PnL Summary">PnL Summary</option>
                                            <option value="Income Summary">Income Summary</option>
                                            <option value="Cash Recon">Cash Recon</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Items Per Page
                                        </label>
                                        <select
                                            value={settings.itemsPerPage}
                                            onChange={(e) => handleChange('itemsPerPage', parseInt(e.target.value))}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                        >
                                            <option value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Auto Refresh Interval (seconds)
                                        </label>
                                        <input
                                            type="number"
                                            value={settings.refreshInterval}
                                            onChange={(e) => handleChange('refreshInterval', parseInt(e.target.value))}
                                            disabled={!settings.autoRefresh}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            id="showCharts"
                                            checked={settings.showCharts}
                                            onChange={(e) => handleChange('showCharts', e.target.checked)}
                                            className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                                        />
                                        <label htmlFor="showCharts" className="text-sm font-medium text-gray-700">
                                            Show Charts on Dashboard
                                        </label>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            id="showNotifications"
                                            checked={settings.showNotifications}
                                            onChange={(e) => handleChange('showNotifications', e.target.checked)}
                                            className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                                        />
                                        <label htmlFor="showNotifications" className="text-sm font-medium text-gray-700">
                                            Show Notification Badges
                                        </label>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            id="autoRefresh"
                                            checked={settings.autoRefresh}
                                            onChange={(e) => handleChange('autoRefresh', e.target.checked)}
                                            className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                                        />
                                        <label htmlFor="autoRefresh" className="text-sm font-medium text-gray-700">
                                            Enable Auto Refresh
                                        </label>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Notification Preferences */}
                        {activeSection === 'notifications' && (
                            <div className="space-y-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h2>
                                
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            id="emailNotifications"
                                            checked={settings.emailNotifications}
                                            onChange={(e) => handleChange('emailNotifications', e.target.checked)}
                                            className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                                        />
                                        <label htmlFor="emailNotifications" className="text-sm font-medium text-gray-700">
                                            Enable Email Notifications
                                        </label>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            id="browserNotifications"
                                            checked={settings.browserNotifications}
                                            onChange={(e) => handleChange('browserNotifications', e.target.checked)}
                                            className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                                        />
                                        <label htmlFor="browserNotifications" className="text-sm font-medium text-gray-700">
                                            Enable Browser Notifications
                                        </label>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 pt-4">
                                    <h3 className="text-sm font-semibold text-gray-900 mb-4">Notification Types</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                id="notifyOnRunComplete"
                                                checked={settings.notifyOnRunComplete}
                                                onChange={(e) => handleChange('notifyOnRunComplete', e.target.checked)}
                                                className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                                            />
                                            <label htmlFor="notifyOnRunComplete" className="text-sm font-medium text-gray-700">
                                                Notify when SOD Run completes
                                            </label>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                id="notifyOnRunFailure"
                                                checked={settings.notifyOnRunFailure}
                                                onChange={(e) => handleChange('notifyOnRunFailure', e.target.checked)}
                                                className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                                            />
                                            <label htmlFor="notifyOnRunFailure" className="text-sm font-medium text-gray-700">
                                                Notify when SOD Run fails
                                            </label>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                id="notifyOnSystemAlerts"
                                                checked={settings.notifyOnSystemAlerts}
                                                onChange={(e) => handleChange('notifyOnSystemAlerts', e.target.checked)}
                                                className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                                            />
                                            <label htmlFor="notifyOnSystemAlerts" className="text-sm font-medium text-gray-700">
                                                Notify on system alerts
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 pt-4">
                                    <div className="flex items-center gap-3 mb-4">
                                        <input
                                            type="checkbox"
                                            id="quietHoursEnabled"
                                            checked={settings.quietHoursEnabled}
                                            onChange={(e) => handleChange('quietHoursEnabled', e.target.checked)}
                                            className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                                        />
                                        <label htmlFor="quietHoursEnabled" className="text-sm font-medium text-gray-700">
                                            Enable Quiet Hours
                                        </label>
                                    </div>

                                    {settings.quietHoursEnabled && (
                                        <div className="grid grid-cols-2 gap-4 ml-7">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Start Time
                                                </label>
                                                <input
                                                    type="time"
                                                    value={settings.quietHoursStart}
                                                    onChange={(e) => handleChange('quietHoursStart', e.target.value)}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    End Time
                                                </label>
                                                <input
                                                    type="time"
                                                    value={settings.quietHoursEnd}
                                                    onChange={(e) => handleChange('quietHoursEnd', e.target.value)}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Security Settings */}
                        {activeSection === 'security' && (
                            <div className="space-y-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Security Settings</h2>
                                
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Change Password
                                        </label>
                                        <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 border border-gray-200 transition-colors">
                                            Change Password
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Session Timeout (minutes)
                                            </label>
                                            <input
                                                type="number"
                                                value={settings.sessionTimeout}
                                                onChange={(e) => handleChange('sessionTimeout', parseInt(e.target.value))}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Last Password Change
                                            </label>
                                            <input
                                                type="date"
                                                value={settings.lastPasswordChange}
                                                disabled
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                id="twoFactorAuth"
                                                checked={settings.twoFactorAuth}
                                                onChange={(e) => handleChange('twoFactorAuth', e.target.checked)}
                                                className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                                            />
                                            <label htmlFor="twoFactorAuth" className="text-sm font-medium text-gray-700">
                                                Enable Two-Factor Authentication
                                            </label>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                id="requirePasswordChange"
                                                checked={settings.requirePasswordChange}
                                                onChange={(e) => handleChange('requirePasswordChange', e.target.checked)}
                                                className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                                            />
                                            <label htmlFor="requirePasswordChange" className="text-sm font-medium text-gray-700">
                                                Require password change on next login
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Export/Import Settings */}
                        {activeSection === 'export' && (
                            <div className="space-y-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Export/Import Settings</h2>
                                
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Default Export Format
                                        </label>
                                        <select
                                            value={settings.defaultExportFormat}
                                            onChange={(e) => handleChange('defaultExportFormat', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                        >
                                            <option value="Excel">Excel (.xlsx)</option>
                                            <option value="CSV">CSV (.csv)</option>
                                            <option value="PDF">PDF (.pdf)</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Export Location
                                        </label>
                                        <select
                                            value={settings.exportLocation}
                                            onChange={(e) => handleChange('exportLocation', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                        >
                                            <option value="Downloads">Downloads</option>
                                            <option value="Desktop">Desktop</option>
                                            <option value="Custom">Custom Location</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            id="includeHeaders"
                                            checked={settings.includeHeaders}
                                            onChange={(e) => handleChange('includeHeaders', e.target.checked)}
                                            className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                                        />
                                        <label htmlFor="includeHeaders" className="text-sm font-medium text-gray-700">
                                            Include Headers in Exports
                                        </label>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            id="includeCharts"
                                            checked={settings.includeCharts}
                                            onChange={(e) => handleChange('includeCharts', e.target.checked)}
                                            className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                                        />
                                        <label htmlFor="includeCharts" className="text-sm font-medium text-gray-700">
                                            Include Charts in Exports
                                        </label>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            id="autoSaveExports"
                                            checked={settings.autoSaveExports}
                                            onChange={(e) => handleChange('autoSaveExports', e.target.checked)}
                                            className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                                        />
                                        <label htmlFor="autoSaveExports" className="text-sm font-medium text-gray-700">
                                            Auto-save Exports
                                        </label>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* API & Integration */}
                        {activeSection === 'api' && (
                            <div className="space-y-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">API & Integration</h2>
                                
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            API Key
                                        </label>
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="text"
                                                value={settings.apiKey}
                                                disabled
                                                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500 font-mono"
                                            />
                                            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 border border-gray-200 transition-colors">
                                                Regenerate
                                            </button>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">Expires on: {settings.apiKeyExpiry}</p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Webhook URL
                                        </label>
                                        <input
                                            type="url"
                                            value={settings.webhookUrl}
                                            onChange={(e) => handleChange('webhookUrl', e.target.value)}
                                            placeholder="https://example.com/webhook"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                        />
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            id="enableWebhooks"
                                            checked={settings.enableWebhooks}
                                            onChange={(e) => handleChange('enableWebhooks', e.target.checked)}
                                            className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                                        />
                                        <label htmlFor="enableWebhooks" className="text-sm font-medium text-gray-700">
                                            Enable Webhooks
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

export default Settings;
