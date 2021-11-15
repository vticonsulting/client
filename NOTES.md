---
title: Notes
---

## Workflow

The claim starts when the adjuster calls in and submits a claim with a representative over the web portal. With all the necessary information (Claim Information, Service Type, Adjuster's Contact Information, and Billing Information).

Once the claim has been submitted with the assistance of the customer service representative, the claim is then pushed to Exemplar.

Customer support is part of the customer service department. The customer service representatives are required to make outbound calls to insureds on behalf of the insurance carriers, to schedule unaccompanied field inspections.

## Departments

| Name                  | Project Status                        |
| --------------------- | ------------------------------------- |
| Customer Service      | Call Queue, Schedule                  |
| Scheduling Support    | Call Queue, Triage, Pending, Schedule |
| Field Services        | Assigned, Confirmed, Working          |
| Claims Services       | Review, Complete                      |
| Estimating Services   |                                       |
| Billing / Collections | Billed, Closed                        |

## Project Statuses

| Name           | Project Status                                                                   |
| -------------- | -------------------------------------------------------------------------------- |
| **Call Queue** |                                                                                  |
| **Schedule**   |                                                                                  |
| **Triage**     |                                                                                  |
| **Pending**    |                                                                                  |
| **Assigned**   | Claim has been assigned to a technician to complete the inspection               |
| **Confirmed**  | Technician has confirmed appointment with adjuster/insured                       |
| **Working**    | Technician on-site                                                               |
| **Review**     | Claim must be reviewed for required documentation and quality review checkpoints |
| **Complete**   | Passes all quality checkpoints and documentation sent to adjuster                |
| **Billed**     | Claims invoice has been sent to the customer                                     |
| **Closed**     | Claim submitted to Hancock                                                       |

## Personas / User Types

- Technician (Inspector)
- Customer Service Rep
- Adjuster
- Insured
- Field Manager
- Customer
- Service Tech
- Insurance Adjuster

## Views/Pages

- Closed Projects
- Complete Claims
- Unpaid Invoices
- Claim Request
- Settings (Service Types, Announcements, FAQs, Territories, IA Firms, What's New, Tokens)
- Profile
- Users

## UI

- Claim Information
- Service Type
- Adjuster Information
- Billing Information

## Model or Attribute

- Adjuster
- Appointment
- Assignment
- Carrier
- Claim
- Department
- Estimate
- Inspection
- Invoice
- Pending Claim
- Permission
- Project
- Project Service Type
- Project Source
- Project Status
- Property
- Region
- Report
- Role
- RolePermission
- Schedule
- Service
- Service Area
- Service Area Postal Code
- Service Area Technician
- Service Region
- Service Region Manager
- Service Type
- Territory
- User
- UserType

## Service Type

- Direct Inspect
- Virtual Inspect
- Emergency Tarp
- Estimate
- Ladder Assist

## Customers (Carriers, Companies)

- Allstate
- Esurance
- Encompass
- California State Auto Association
- Liberty Mutual

## Vendors

- EagleView
- Hover
- Symbility
- XactAnalysis Qualify Assurance
- Xactimate Estimates
- Xactware

## Actions

- Accept
- Add Application User
- Add Appoinment Button
- Add Business Unit
- Add Customer
- Add Insurance Adjuster
- Add Project
- Add Service Tech
- Bulk Assign
- Close Billed Projects
- Export to CSV
- Export to CSV
- Export to QBXML
- Reset Billed to Complete
- Reset List



properties

- name, type, size, tip, appearance, src, text,
- external, active, disabled, children, href, innerRef, onClick, title
- qa, as, ariaLabel
- currentValue, maxValue,
- id, value, label, checked, indeterminate, tabIndex
- alt,
- onClick, onError, onLoad, onBlur, onChange, onFocus, onKeydown, onKeyUp,
  onPaste, onClose, onSelect
- defaultImage
- tooltip, zIndex
- width
- placeholder, type
- autoComplete, autoFocus, checked, disabled, readOnly, isInvalid, hasWarning,
  isOpen, fullWidth
- required, elemBefore, elemAfter, maxLength, inputProps,
- delay, color
- density
- borderColor

System props

System props apply standard sets of properties to a component that can be used
to alter its appearance on the fly.

Common

- color
- bg
- margin
- padding

Border

- border
- borderTop
- borderRight
- borderBottom
- borderLeft
- borderWidth
- borderStyle
- borderColor
- borderRadius
- borderBottomLeftRadius
- borderBottomRightRadius
- borderTopLeftRadius
- borderTopRightRadius
- boxShadow

Typography

- fontFamily
- typeScale
- fontStyle
- fontWeight
- lineHeight
- textAlign

Layout

- display
- size
- width
- height
- minWidth
- minHeight
- maxWidth
- maxHeight
- overflow
- verticalAlign

Position

- position
- zIndex
- top
- right
- bottom
- left

Flexbox

- flexBasis
- flexDirection
- flexWrap
- alignContent
- alignItems
- justifyContent
- justifyItems
- order
- flex
- justifySelf
- alignSelf

Badge is a decorative indicator used to either call attention to a related item
or for communicating non-actionable, supplemental information. The Box component
is a low-level primitive used for layout purposes. It can be used to create grid
layouts, apply padding or margin, and more. Button is used to trigger actions
based on a user's interaction.
